 interface RouteDefinition {
    home: string;
    store: string;
    notFound: string; // No podemos usar "404" como clave porque empieza con un número
  }
  
  export const route: RouteDefinition = {
    home: "/",
    store: "/store",
    notFound: "/404",
  };
  