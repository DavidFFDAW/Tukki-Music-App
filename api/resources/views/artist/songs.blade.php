@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <h3 class="title"> Mis Canciones Subidas</h3>
            <a class="btn btn-warning" type="button" role="button" href="{{ route('artist.getCreateSong') }}">Subir Nueva Cancion</a>
            <div class="card">
                @if(!empty($songs))
                @foreach($songs as $song)
                <div style="display: flex;" class="justify-content-between align-items-lg-center">
                    <span>{{ $song->name }}</span>

                    <form style="display: flex;" class="justify-content-center  align-items-lg-center" method="POST" action="{{ route('artist.deleteSong') }}">
                        @csrf
                        <input type="hidden" name="id" value="{{ $song->id }}" />
                        <a class="btn btn-success" type="button" href="{{ url('/artist/song/update/'.$song->id) }}">Editar</a>
                        <button class="btn btn-danger" type="submit">Borrar</button>
                    </form>

                </div>
                @endforeach
                @endif
            </div>
        </div>
    </div>
</div>
@endsection