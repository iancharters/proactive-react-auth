# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :echelon_api,
  namespace: EchelonAPI,
  ecto_repos: [EchelonAPI.Repo]

# Configures the endpoint
config :echelon_api, EchelonAPIWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "cqTuYErcKx6Ld+OQ/M7m3hf5v11eADK57XytDKnjqShw6VmknDzlKyl4UbuHbYLT",
  render_errors: [view: EchelonAPIWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: EchelonAPI.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Configures Guardian
config :echelon_api, EchelonAPIWeb.Guardian,
  issuer: "echelon_api",
  ttl: {30, :days},
  verify_issuer: true
  # serializer: EchelonAPI.GuardianSerializer

config :cors_plug,
  origin: ["http://localhost:3000", "http://localhost:4000"]

  # Import environment specific config. This must remain at the bottom
  # of this file so it overrides the configuration defined above.
  import_config "#{Mix.env}.exs"
