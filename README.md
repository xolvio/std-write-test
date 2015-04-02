# std-write-test

Repo that shows Meteor is doing something funny with `stdout.write` where the output is not directly getting to the console, it is buffered until a `\n` is detecte before being output. This is a bad experience for testing frameworks that show progress and such.


Steps to reproduce:
```
git clone git@github.com:xolvio/std-write-test.git
cd std-write-test
meteor
```
