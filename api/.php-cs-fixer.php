<?php

$finder = PhpCsFixer\Finder::create()
    ->exclude('vendor')
    ->in(__DIR__);

$config = new PhpCsFixer\Config();
return $config->setRules([
    '@PSR2' => true,
    'curly_braces_position' => [
        'anonymous_classes_opening_brace' => 'next_line_unless_newline_at_signature_end',
    ],
    'array_syntax' => ['syntax' => 'short'],
    'no_unused_imports' => true,
])
    ->setFinder($finder);
