export const CardMyProducts = () => {
  const { productsUser, userProducts } = useContext(ProductContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    productsUser();
  }, []);

  return (
    <CardContainer>

                  {
                  products === null || !user ? (
                <h1>Você ainda não tem produtos</h1>
            ) : (
              userProducts?.map((product) => (
        <MyProdutsCard key={product.id} product={product} />
      ))
            )
            }
    </CardContainer>
  );
}