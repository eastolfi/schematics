import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { CrudOptions } from './crud.schema';
import { readFileSync } from 'fs';

describe('CRUD Factory', () => {
  const runner: SchematicTestRunner = new SchematicTestRunner(
    '.',
    path.join(process.cwd(), 'src/collection.json'),
  );

  describe('[REST API]', () => {
    it('should generate appropriate files ', async () => {
      const options: CrudOptions = {
        name: 'users',
      };
      const tree = await runner.runSchematic('crud', options);
      const files = tree.files;
      expect(files).toEqual([
        '/users/users.controller.ts',
        '/users/users.controller.spec.ts',
        '/users/users.module.ts',
        '/users/users.service.ts',
        '/users/users.service.spec.ts',
      ]);
    });
    it("should keep underscores in resource's path and file name", async () => {
      const options: CrudOptions = {
        name: '_users',
      };
      const tree = await runner.runSchematic('crud', options);
      const files = tree.files;
      expect(files).toEqual([
        '/_users/_users.controller.ts',
        '/_users/_users.controller.spec.ts',
        '/_users/_users.module.ts',
        '/_users/_users.service.ts',
        '/_users/_users.service.spec.ts',
      ]);
    });
    describe('when "spec" option is not enabled', () => {
      it('should generate appropriate files (without dtos)', async () => {
        const options: CrudOptions = {
          name: 'users',
          spec: false,
        };
        const tree = await runner.runSchematic('crud', options);
        const files = tree.files;
        expect(files).toEqual([
          '/users/users.controller.ts',
          '/users/users.module.ts',
          '/users/users.service.ts',
        ]);
      });
    });
  });

  describe('[REST API]', () => {
    const options: CrudOptions = {
      name: 'users',
      isSwaggerInstalled: true,
    };

    let tree: UnitTestTree;

    beforeAll(async () => {
      tree = await runner.runSchematic('crud', options);
    });

    it('should generate "UsersController" class', () => {
      assertFiles(
        tree,
        '/users/users.controller.ts',
        'src/lib/crud/expected/controller.ts',
      );
    });

    it('should generate "UsersService" class', () => {
      assertFiles(
        tree,
        '/users/users.service.ts',
        'src/lib/crud/expected/service.ts',
      );
    });

    it('should generate "UsersModule" class', () => {
      assertFiles(
        tree,
        '/users/users.module.ts',
        'src/lib/crud/expected/module.ts',
      );
    });

    it('should generate "UsersController" spec file', () => {
      assertFiles(
        tree,
        '/users/users.controller.spec.ts',
        'src/lib/crud/expected/controller.spec.ts',
      );
    });

    it('should generate "UsersService" spec file', () => {
      assertFiles(
        tree,
        '/users/users.service.spec.ts',
        'src/lib/crud/expected/service.spec.ts',
      );
    });
  });

  it('should create spec files', async () => {
    const options: CrudOptions = {
      name: 'foo',
      spec: true,
      flat: true,
    };
    const tree: UnitTestTree = await runner.runSchematic('crud', options);

    const files: string[] = tree.files;

    expect(
      files.find((filename) => filename === '/foo.controller.spec.ts'),
    ).toBeDefined();
    expect(
      files.find((filename) => filename === '/foo.service.spec.ts'),
    ).toBeDefined();
  });
  it('should create spec files with custom file suffix', async () => {
    const options: CrudOptions = {
      name: 'foo',
      spec: true,
      specFileSuffix: 'test',
      flat: true,
    };
    const tree: UnitTestTree = await runner.runSchematic('crud', options);

    const files: string[] = tree.files;

    expect(
      files.find((filename) => filename === '/foo.controller.spec.ts'),
    ).toBeUndefined();
    expect(
      files.find((filename) => filename === '/foo.controller.test.ts'),
    ).toBeDefined();

    expect(
      files.find((filename) => filename === '/foo.service.spec.ts'),
    ).toBeUndefined();
    expect(
      files.find((filename) => filename === '/foo.service.test.ts'),
    ).toBeDefined();
  });
});

function assertFiles(tree: UnitTestTree, actual: string, expected: string) {
  expect(tree.readContent(actual)).toEqual(readFileSync(expected).toString());
}
