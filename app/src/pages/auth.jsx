import { LoginForm } from 'wasp/client/auth'

export function Login() {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  )
}

// A layout component to center the content
export function Layout({ children }) {
  return (
    <div className="h-full w-full bg-white">
      <div className="flex min-h-[75vh] min-w-full items-center justify-center">
        <div className="h-full w-full max-w-sm bg-white p-5">
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}