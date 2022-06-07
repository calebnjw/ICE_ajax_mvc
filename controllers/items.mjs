export default function initItemsController(db) {
  const index = async (request, response) => {
    try {
      const items = await db.Item.findAll();

      response.send(items);
    } catch (error) {
      console.log(error);
    }
  };

  const baseRoute = async (request, response) => {
    response.render('index');
  };

  const singleItemRoute = async (request, response) => {
    try {
      const { id } = request.params;
      const item = await db.Item.findOne({ where: { id } });
      console.log(item);

      response.render('single', { item });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
    baseRoute,
    singleItemRoute,
  };
}
