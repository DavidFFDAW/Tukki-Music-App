const user = {
    avatar: 'https://www.intra-tp.com/wp-content/uploads/2017/02/no-avatar.png',
    name: 'DavidFF',
    type: 'normal',
    password: '12345',
}

const playlists = [
    { id: 1, name: 'Every Song I Have', description: 'Una playlist influenciada por nadad' },
    { id: 2, name: 'My Playlist' },
    { id: 3, name: 'Spanish Songs' },
    { id: 4, name: 'Till you can no more' },
    { id: 5, name: 'Dance Playlist' },
    { id: 6, name: 'Shingeki Things' },
    { id: 7, name: 'Films and Stuff' },
    { id: 8, name: 'Famous Tik Toks' },
];

const songs = [
    { id: 1, playlist_id: 1, name: 'Welcome to the jungle', author: 'Gun\'s & Roses', uri: 'url' },
    { id: 2, playlist_id: 1, name: 'When we were young',author: 'Adele', uri: 'url' },
    { id: 3, playlist_id: 1, name: 'Me maten', author: 'C.Tangana', uri: 'url' },
    { id: 4, playlist_id: 1, name: 'Los tontos', author: 'C.Tangana', uri: 'url' },
];

export const Data = { user, playlists, songs };