defmodule EchelonAPIWeb.Router do
  use EchelonAPIWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :unauthorized do
    plug :fetch_session
  end

  pipeline :authorized do
    plug :fetch_session
    plug Guardian.Plug.Pipeline, module: EchelonAPIWeb.Guardian,
      error_handler: EchelonAPIWeb.AuthErrorController
    plug Guardian.Plug.VerifySession
    plug Guardian.Plug.LoadResource
  end

  scope "/api", EchelonAPIWeb do
    pipe_through :api


    scope "/" do
      pipe_through :unauthorized

      post "/sessions", SessionController, :create
      # post "/sessions/refresh", SessionController, :refresh2
      resources "/users", UserController, only: [:create]
    end

    scope "/" do
      pipe_through :authorized

      delete "/sessions", SessionController, :delete
      post "/sessions/refresh", SessionController, :refresh
    end
  end
end
