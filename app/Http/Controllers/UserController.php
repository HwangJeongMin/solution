<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * 사용자 목록
     *
     * @return \Illuminate\Http\Response
     */
    public function getUserList(Request $request)
    {
        // return User::all();
        $data = $request->validate([
            'mode' => 'require|string'
        ]);

        if($data === 'getUserList')
            return response()->json(['result' => 'ok']);
    }

    /**
     * 사용자 추가
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'  => 'required|string',
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
    }
}
