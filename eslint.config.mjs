import { dirname } from 'path';
import { eslintPluginPrettierRecommended } from 'eslint-plugin-prettier/recommended';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  eslintPluginPrettierRecommended,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

export default eslintConfig;
