defmodule EchelonAPIWeb.AuthErrorController do
  import Plug.Conn
  use EchelonAPIWeb, :controller

  def auth_error(conn, {_type, _reason}, _opts) do
    conn
    |> put_status(:unauthorized)
    |> render(EchelonAPIWeb.SessionView, "wrong_credentials.json")
  end
end
