// how to manipulate data in components using state, how to display different output

// event handlers are just function which execute when a user interacts with the UI, click, hover, scroll. etc
// we can create our own components and pass event handler props which trigger a function, or we can use inbuild functions 

'use client';
export default function Interactivity () {
    return (
        <Toolbar 
            onPlayMovie={() => alert('Playing')}
            onUploadImage={() => alert('Uploading')}
        />
    );
}

function Toolbar({onPlayMovie,onUploadImage }) {
    return (
        <div>
            <Button onClick={onPlayMovie}>
                Play movie
            </Button>
            <Button onClick={onUploadImage}>
                upload movie
            </Button>
        </div>
    );
}

function Button({onClick, children}) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}