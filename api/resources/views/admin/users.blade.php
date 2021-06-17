@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <h3 class="title"> Usuarios con peticiones</h3>

            <div class="card">
                @foreach($petitioningUsers as $user)
                <div class="card">
                    <div class="card card-body">
                        <div style="display: flex;" class="justify-content-between align-items-lg-center">
                            <span>{{ $user->name }}</span>
                            <span>{{ $user->username }}</span>
                            <span>{{ $user->email }}</span>

                            <input type="hidden" name="id" value="{{ $user->id }}" />

                            <form style="display: flex;" class="justify-content-center  align-items-lg-center" method="POST" action="{{ route('admin.updatePetition') }}">
                                @csrf
                                <input type="hidden" name="id" value="{{ $user->id }}" />
                                <button class="btn btn-success" type="submit" name="button" value="accept">Aceptar</button>
                                <button class="btn btn-danger" type="submit" name="button" value="deny">Denegar</button>
                            </form>

                        </div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>
</div>
@endsection