@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <h3 class="title"> Mis Canciones Subidas</h3>

            <form enctype="multipart/form-data" action="{{ route('artist.createSong') }}" method="POST" autocomplete="off">
                @csrf
                <div class="card">
                    <div class="card card-body">
                        <input type="text" class="form-control" name="name" placeholder="Nombre de cancion...">
                        <input type="text" class="form-control" name="duration" placeholder="Duracion de la cancion...">
                        <input type="file" class="form-control" name="song" placeholder="Seleccione la cancion">
                    </div>
                    <button type="submit" class="btn btn-success">Subir Nueva Canción</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection