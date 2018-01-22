# proactive-react-auth

This project is based takes [proactive-react](http://github.com/iancharters/proactive-react) and adds authentication via `Guardian` on an Elixir/Phoenix back end.

## Getting Started
```
git clone git@github.com:iancharters/proactive-react-auth.git
cd proactive-web
npm install
npm run dev
```

Open a second terminal window in the `proactive-react-auth` directory.

```
cd proactive-api
mix deps.get
mix ecto.create
mix ecto.migrate
open http://localhost:3000
```

A default user is created with the email **admin@admin.com** and the password **12345678**.
