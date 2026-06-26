export const apiClient = {
  async get<T>(loader: () => T | Promise<T>): Promise<T> {
    return await loader();
  },

  async post<T>(loader: () => T | Promise<T>): Promise<T> {
    return await loader();
  },

  async put<T>(loader: () => T | Promise<T>): Promise<T> {
    return await loader();
  },

  async delete<T>(loader: () => T | Promise<T>): Promise<T> {
    return await loader();
  },
};