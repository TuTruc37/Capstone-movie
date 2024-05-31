// src/redux/slices/movieSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getListMovie, deleteMovie } from '../../services/listMovieService';

// Async thunk để lấy danh sách phim
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await getListMovie();
  return response.data.content;
});

// Async thunk để xóa phim
export const removeMovie = createAsyncThunk(
  'movies/removeMovie',
  async (maPhim, { dispatch }) => {
    await deleteMovie(maPhim);
    dispatch(fetchMovies()); // Lấy lại danh sách phim sau khi xóa
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    arrMovie: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.arrMovie = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(removeMovie.fulfilled, (state, action) => {
        state.arrMovie = state.arrMovie.filter(
          movie => movie.maPhim !== action.meta.arg
        );
      });
  },
});

export default movieSlice.reducer;
