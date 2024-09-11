import { src, task, dest, parallel } from 'gulp';

function copy({
  source,
  destination,
}: {
  source: string;
  destination: string;
}) {
  return () => src(source).pipe(dest(destination));
}

task(
  'copy:collection',
  parallel(
    copy({ source: 'src/collection.json', destination: 'dist' }),
    copy({ source: 'src/lib/**/schema.json', destination: 'dist/lib' }),
  ),
);
task(
  'copy:lib',
  parallel(
    copy({
      source: 'src/lib/**/{files,workspace}/**/*.*',
      destination: 'dist/lib',
    }),
    copy({
      source: 'src/lib/**/{files,workspace}/**/.!(gitignore)',
      destination: 'dist/lib',
    }),
  ),
);
