class HttpClient {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(endpoint: string, options: RequestInit): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const response = await fetch(url, options);

    return await response.json();
  }

  //GET
  public get<T>(endpoint: string, headers: HeadersInit = {}): Promise<T> {
    return this.request<T>(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });
  }

  //POST
  public post<T, B>(
    endpoint: string,
    body: B,
    headers: HeadersInit = {}
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body),
    });
  }

  // PUT
  public put<T, B>(
    endpoint: string,
    body: B,
    headers: HeadersInit = {}
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body),
    });
  }

  // PATCH
  public patch<T, B>(
    endpoint: string,
    body: B,
    headers: HeadersInit = {}
  ): Promise<T> {
    return this.request<T>(endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify(body),
    });
  }

  // DELETE
  public delete<T>(endpoint: string, headers: HeadersInit = {}): Promise<T> {
    return this.request<T>(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });
  }
}

export const httpClient = new HttpClient(process.env.BASE_URL as string);
