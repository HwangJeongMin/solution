@extends('layouts.app')

@section('content')
<div class="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-64">
    <div class="max-w-md w-full">
        <div class="text-center text-lg font-bold p-2 rounded-t-lg text-white bg-indigo-600 max-w-md w-full">로그인</div>
        <div class="max-w-md w-full space-y-8 border rounded-b-lg shadow-lg p-10 bg-white">
            <div>


            </div>
            <form class="mt-8 space-y-6" method="POST" action="{{ route('login') }}">
            @csrf
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
                <div>
                <label for="email" class="sr-only">Email address</label>
                <input id="email" type="email"  name="email" value="{{ old('email') }}" required autocomplete="email" autofocus
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                    text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
                {{-- @error('email')
                    <span class="text-red-900" role="alert">
                        <strong>이메일 주소가 없습니다.</strong>
                    </span>
                @enderror --}}
                </div>
                <div>
                <label for=" " class="sr-only">Password</label>
                <input id="password" type="password" name="password" required autocomplete="current-password"
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300
                    placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
                @error('password')
                    <span class="text-blue-900" role="alert">
                        <strong>비밀번호가 틀렸습니다.</strong>
                    </span>
                @enderror
                </div>
            </div>

            <div class="flex items-center justify-between">
                <div class="flex items-center">
                <input class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                <label class="ml-2 block text-sm text-gray-900" for="remember">
                    {{ __('Remember Me') }}
                </label>
                </div>

                <div class="text-sm">
                @if (Route::has('password.request'))
                    <a class="font-medium text-indigo-600 hover:text-indigo-500" href="{{ route('password.request') }}">
                        {{ __('Forgot Your Password?') }}
                    </a>
                @endif
                </div>
            </div>

            <div>
                <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                    <!-- Heroicon name: lock-closed -->
                    <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                </span>
                로그인
                </button>
            </div>
            </form>
        </div>
    </div>
  </div>

@endsection
