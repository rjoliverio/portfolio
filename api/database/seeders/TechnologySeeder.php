<?php

namespace Database\Seeders;

use App\Models\Technology;
use Illuminate\Database\Seeder;

class TechnologySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $technologies = [[
            'name' => 'JavaScript'
        ], [
            'name' => 'TypeScript'
        ], [
            'name' => 'ReactJS'
        ], [
            'name' => 'NodeJS'
        ], [
            'name' => 'ExpressJS'
        ], [
            'name' => 'Next.js'
        ], [
            'name' => 'React Native'
        ], [
            'name' => 'NativeBase'
        ],  [
            'name' => 'Material UI'
        ], [
            'name' => 'TailwindCSS'
        ], [
            'name' => 'CSS'
        ], [
            'name' => 'HTML'
        ], [
            'name' => 'Docker'
        ], [
            'name' => 'MySQL'
        ], [
            'name' => 'MSSQL'
        ], [
            'name' => 'PostgreSQL'
        ], [
            'name' => 'GraphQL'
        ], [
            'name' => 'Laravel'
        ], [
            'name' => 'ASP.NET'
        ], [
            'name' => 'VSCode Extension'
        ]];

        Technology::upsert($technologies, ['name']);
    }
}
