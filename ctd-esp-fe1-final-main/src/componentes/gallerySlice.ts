import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface Photo {
    
        id: number,
        name: string,
        status: string,
        species: string,
        type: string,
        gender: string,
        origin: {
          name: string,
          url: string
        },
        location: {
          name: string,
          url: string
        },
        image: string,
        episode: [
            string,
        
          // ...
        ],
        url: string,
        created: string
      
}

interface initialType {
    photos: Photo[]
    loading: boolean
}

export const getPhotos = createAsyncThunk(
    'gallery/photos',
    async (page: number) => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&limit=9`)
        const parseRes = await res.json()
        return parseRes
    }
)

const initialState: initialType = {
    photos: [],
    loading: false
}

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPhotos.pending, (state) => {
                state.loading = true
            })
            .addCase(getPhotos.fulfilled, (state, action) => {
                state.loading = false
                state.photos.push(...action.payload)
            })
            .addCase(getPhotos.rejected, (state, action) => {
                state.loading = false
            })
    }
})

export default gallerySlice.reducer