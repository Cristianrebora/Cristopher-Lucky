function fireSweetAlert(a) {
    Swal.fire({
      title: "Se agregó al carrito!",
      showCancelButton: false,
      confirmButtonText: "Seguir comprando",
      
      confirmButtonColor: "#808080",
      
    }).then((result) => {
        
      if (result.isConfirmed) {
        agregar(a)
         
      }
    });
  }
  function agregar(a){
    const compras = [];
    compras.push(JSON.parse(sessionStorage.getItem("compras")))
    compras.push(a);
    compras.push(" - ");
    sessionStorage.setItem("compras", JSON.stringify(compras));

}

