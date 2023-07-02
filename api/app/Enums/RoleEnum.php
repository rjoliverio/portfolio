<?php

namespace App\Enums;

enum RoleEnum: int
{
    case ADMIN = 1;
    case GUEST = 2;

    public function toString()
    {
        return match ($this) {
            self::ADMIN => 'admin',
            self::GUEST => 'guest',
        };
    }
}
