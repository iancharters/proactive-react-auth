defmodule EchelonAPI.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    EchelonAPI.Accounts.create_user(%{name: "admin", username: "admin", password: "12345678", email: "admin@admin.com", is_superuser: true, is_staff: true, bittrex_api_key: "abc123", bittrex_api_secret: "def456"}, %{is_superuser: true})
  end
end
