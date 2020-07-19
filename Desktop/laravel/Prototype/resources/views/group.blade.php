@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
                <div class="card-body">
                   

                    <div class="alert alert-success" role="alert">
                            グループへようこそ！！
                    </div>

                    <form method="POST" action="{{ route('addData') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="groupname" class="col-md-4 col-form-label text-md-right">{{ __('グループ名') }}</label>

                            <div class="col-md-6">
                                <input id="groupname" type="text" class="form-control @error('groupname') is-invalid @enderror" name="groupname" value="{{ old('groupname') }}" required autocomplete="groupname" autofocus>

                                @error('groupname')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="aikotoba" class="col-md-4 col-form-label text-md-right">{{ __('合言葉') }}</label>

                            <div class="col-md-6">
                                <input id="aikotoba" type="text" class="form-control @error('aikotoba') is-invalid @enderror" name="aikotoba" value="{{ old('aikotoba') }}" required autocomplete="aikotoba">

                                @error('aikotoba')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="username" class="col-md-4 col-form-label text-md-right">{{ __('ユーザ名') }}</label>

                            <div class="col-md-6">
                                <input id="username" type="text" class="form-control @error('username') is-invalid @enderror" name="username" value="{{ old('username') }}" required autocomplete="username">

                                @error('usename')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('グループ作成') }}
                                </button>
                            </div>
                        </div>
                    </form>

                   
                  
                    
                </div>
        </div>
    </div>
</div>
@endsection
