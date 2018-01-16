defmodule EchelonAPIWeb.SessionView do
  use EchelonAPIWeb, :view
  alias EchelonAPIWeb.SessionView

  def render("show.json", %{user: user, jwt: jwt}) do
    %{data: render_one(user, EchelonAPIWeb.UserView, "user.json"),
      meta: %{token: jwt}}
  end

  def render("delete.json", _) do
    %{ok: true}
  end

  def render("no_session.json", _) do
    %{errors: "invalid or expired session token"}
  end
  
  def render("wrong_credentials.json", _) do
    %{errors: "Wrong email or password"}
  end

  def render("invalid_issuer.json", _) do
    %{errors: "invalid issuer"}
  end

  def render("already_taken_username.json", _) do
    %{errors: "This username has already been taken. Please pick another username"}
  end

  def render("already_taken_email.json", _) do
    %{errors: "This email has already been taken. Please pick another email"}
  end

  def render("invalid_token.json", _) do
    %{errors: "invalid token"}
  end
end
