module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [
      2,
      'always',
      [
        'sentence-case',
        'start-case',
        'pascal-case',
        'upper-case',
        'lower-case',
      ],
    ],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'sample',
      ],
    ],
    'shin-min-commit-message-rule': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'shin-min-commit-message-rule': ({ subject }) => {
          const regex = /^SHIN-MIN-(\d+) .+/;
          return [
            regex.test(subject),
            "ERROR: Your commit message is not formatted correctly. Please use the format below:\n'<type>[optional scope]: SHIN-MIN-<number of ticket> <description>'",
          ];
        },
      },
    },
  ],
};
