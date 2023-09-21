import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loaduser = createAsyncThunk("user/load", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/users/me/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
      },
    });

    const data = await res.json();

    if (res.status === 200) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    const body = JSON.stringify({ email, password });

    try {
      const res = await fetch("http://127.0.0.1:8000/auth/jwt/create/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body,
      });

      const data = await res.json();

      if (res.status === 200) {
        localStorage.setItem("access", data.access);

        const { dispatch } = thunkAPI;

        dispatch(loaduser());

        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
      })
      .addCase(loaduser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loaduser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loaduser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
