class AppConfig {

    public categoriesUrl = "http://localhost:3001/api/categories";
    public productsByCategoryUrl = "http://localhost:3001/api/products-by-category/";
    public productsUrl = "http://localhost:3001/api/products/";

}

export const appConfig= new AppConfig();