import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { JWT } from 'next-auth/jwt';
import   NextAuth from 'next-auth';
const NEXTAUTH_URL = process.env.NEXTAUTH_URL;

const options:any = {
  providers: [
    {
      id: 'myprovider',
      name: 'My Provider',
      type: 'oauth',
      version: '2.0',
      scope: 'openid profile email',
      params: {
        grant_type: 'authorization_code',
        response_type: 'code',
        client_id: process.env.MYPROVIDER_CLIENT_ID,
        client_secret: process.env.MYPROVIDER_CLIENT_SECRET,
        authorization_url: 'https://myprovider.com/oauth2/auth',
        token_url: 'https://myprovider.com/oauth2/token',
        userinfo_url: 'https://myprovider.com/oauth2/userinfo'
      },
      profile: (profile: any) => {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email
        };
      },
      jwt: async (token:any, user: any) => {
        if (user) {
          // Decode JWT token
          const decodedToken = jwt_decode(token.access_token) as any;
          // Check if token is expired
          if (decodedToken.exp < Date.now() / 1000) {
            throw new Error('Token expired');
          }
          // Add custom fields to JWT token
          token.id = user.id;
          token.name = user.name;
          token.email = user.email;
          // Fetch user data from API
          const response = await axios.get(process.env.BASE_URL_PREPROD+'signup_svc/pb/users/register', {
            headers: {
              Authorization: `Bearer ${token.access_token}`
            }
          });
          const userData = response.data;
          token.role = userData.role;
          return token;
        }
        return null;
      }
    }
  ],
  callbacks: {
    jwt: async (token: JWT, user: any, account: any, profile: any, isNewUser: boolean) => {
      return Promise.resolve(token);
    },
    session: async (session: any, token: JWT) => {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.role = token.role;
      return Promise.resolve(session);
    }
  },
  debug: true,
  pages:{
    signin:"/login"
  }
};

export default (req: any, res: any) => {
  return NextAuth(req, res, options);
};
