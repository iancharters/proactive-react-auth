defmodule EchelonAPIWeb.UserView do
  use EchelonAPIWeb, :view
  alias EchelonAPIWeb.UserView

  def render("user.json", %{user: user}) do
    %{id: user.id,
      username: user.username,
      email: user.email}
  end
end
