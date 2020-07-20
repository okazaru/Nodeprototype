@extends('layouts.app')

@section('content')
                    @if (Auth::check()) 

                    <!--<div class="alert alert-success" role="alert">
                            ログインできました！
                        </div>-->
                    <div class="category project">
                        <a class="btn btn-primary btn-lg btn-block" href="{{route('project')}}">プロジェクトを作成する</a>
                        <div class="content">　
                    
                            <p class="text">プロジェクト一覧</p>
                    
                        </div>
                    </div>

                    <div class="category group">
                        <a class="btn btn btn-warning btn-lg btn-block" href="{{route('group')}}">グループを作成する</a>
                        <div class="content">

                            <p class="text">グループ一覧</p>

                            <div>
                                    <ul>
                                         @foreach($Group as $group)
                                            @if(Auth::user()->name == $group->username)
                                            <li>                            
                                                {{$group->groupname}}
                                            </li>
                                            @endif
                                        @endforeach
                                    </ul>
                            </div>

                        </div>           
                    </div>

                    

                    @else
                    <div class="alert alert-success" role="alert">
                            何かがおかしいよ？
                        </div>
                     @endif
@endsection
