using Microsoft.AspNetCore.Mvc;
using SampleSizeApi.Models.DTO;
using SampleSizeApi.Models.Request;
using SampleSizeApi.Models.Response;
using SampleSizeApi.Service;
using System.Text.Json.Serialization;

namespace SampleSizeApi.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class SampleSizeController : Controller
    {
        private ICalculateService _calculateService;
        private IPaginationService<ItemKnown> _pagination;
        public SampleSizeController(ICalculateService calculateService, IPaginationService<ItemKnown> pagination)
        {
            _calculateService = calculateService;
            _pagination = pagination;
        }

        [HttpPost]
        public IActionResult GetItemsKnown([FromBody] CalculateRequest model)
        {
            var response = new CalculateResponse()
            {
                Items = null,
                Pagination = model.Pagination
            };

            try
            {
                var itemsKnown = _calculateService.GetItemsKnown(model.InputRequest);
                var filter = _pagination.GetCurrentPage(itemsKnown, model.Pagination);

                response.Items = filter;
                response.Pagination = model.Pagination;
            }
            catch (Exception ex)
            {
                response.Error = ex.Message;
            }

            return Json(response);
        }
    }
}
