import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'
import { ApolloProvider } from '@apollo/client/react'
import './globals.css'
import App from './App.tsx'

const queryClient = new QueryClient()

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_CHAT_GRAPHQL_ENDPOINT,
})

const graphqlClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={graphqlClient}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ApolloProvider>
  </StrictMode>,
)
