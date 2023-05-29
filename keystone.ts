// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

// authentication is configured separately here too, but you might move this elsewhere
// when you write your list-level access control functions, as they typically rely on session data
import { session, withAuth } from './auth'

import { config } from '@keystone-6/core'
// to keep this file tidy, we define our schema in a different file
import { lists } from './schema'

export default withAuth(
  config({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: 'postgresql',
      url: 'postgresql://fransek:O0GbYs3xJikrWjrk-zakpQ@fransek-cms-7985.8nj.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full',
    },
    lists,
    session,
  })
)
