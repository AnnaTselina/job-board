import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import vacanciesAPI from "./requests";

export async function middleware(request: NextRequest) {
  const access_token = request.cookies.get("access_token");
  //TODO: add error handling
  if (access_token) {
    //TODO: add check if access_token is valid

    return NextResponse.next();
  } else {
    const response = NextResponse.next();

    const authorizationResponse = await vacanciesAPI.getAccessToken();
    const data = await authorizationResponse.json();
    const { access_token } = data;

    response.cookies.set("access_token", access_token, {
      httpOnly: true,
    });
    return response;
  }
}

export const config = {
  matcher: ["/vacancies/:path*"],
};
