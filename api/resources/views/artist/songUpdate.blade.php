@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <h3 class="title"> Edicion de Cancion ('{{ $song->name }}')</h3>

            <form action="{{ route('artist.updateSong') }}" method="POST" autocomplete="off">
                @csrf
                <div class="card">
                    <div class="card card-body">
                        <input type="hidden" name="id" value="{{ $song->id }}">
                        <input type="text" class="form-control" name="name" value="{{ $song->name }}" placeholder="Nombre de cancion...">
                        <input type="text" class="form-control" name="duration" value="{{ $song->duration }}" placeholder="Duracion de la cancion...">
                        <input type="file" class="form-control" name="song" placeholder="Seleccione la cancion">
                    </div>
                    <button type="submit" class="btn btn-success">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection