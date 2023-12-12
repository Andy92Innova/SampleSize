using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SampleSizeApi.Controllers;
using SampleSizeApi.Models.DTO;
using SampleSizeApi.Models.Request;
using SampleSizeApi.Models.Response;
using SampleSizeApi.Service;
using SampleSizeApi.Service.Interface;
using System.Text.Json;

namespace SampleSizeApiTest
{
    public class SampleSizeControllerTest
    {
        private SampleSizeController _controller;
        private ICalculateService _calculateService;
        private IPaginationService<ItemKnown> _paginationService;
        public SampleSizeControllerTest()
        {

            _calculateService = new CalculateService();
            _paginationService = new PaginationService<ItemKnown>();
            _controller = new SampleSizeController(_calculateService, _paginationService);

        }

        [Fact]
        public void GetItemsKnown_Success()
        {
            //Arrange
            var model = new CalculateRequest()
            {
                InputRequest = new Input()
                {
                    Input1 = 1,
                    Input2 = 2,
                    SampleSize = 10
                },
                Pagination = new Pagination()
                {
                    Next = 1
                }
            };

            //Act
            var result = _controller.GetItemsKnown(model) as JsonResult;

            var jsonResult = JsonConvert.SerializeObject(result.Value);
            
            var objectResult = JsonConvert.DeserializeObject<CalculateResponse>(jsonResult);

            Console.WriteLine(objectResult);

            //Assert
            Assert.IsAssignableFrom<JsonResult>(result);
            Assert.NotNull(jsonResult);
            Assert.True(objectResult.Items.Count > 0);
            Assert.True(objectResult.Pagination.TotalPages > 0);

        }

        [Fact]
        public void GetItemsKnown_Success_ListEmpty()
        {
            //Arrange
            var model = new CalculateRequest()
            {
                InputRequest = new Input()
                {
                    Input1 = 1,
                    Input2 = 2,
                    SampleSize = 0
                },
                Pagination = new Pagination()
                {
                    Next = 1
                }
            };

            //Act
            var result = _controller.GetItemsKnown(model) as JsonResult;

            var jsonResult = JsonConvert.SerializeObject(result.Value);

            var objectResult = JsonConvert.DeserializeObject<CalculateResponse>(jsonResult);

            Console.WriteLine(objectResult);

            //Assert
            Assert.IsAssignableFrom<JsonResult>(result);
            Assert.NotNull(jsonResult);
            Assert.True(objectResult.Pagination.TotalPages > 0);
            Assert.True(objectResult.Items.Count == 0);

        }

        [Fact]
        public void GetItemsKnown_Fail()
        {
            //Arrange
            var model = new CalculateRequest()
            {
                InputRequest = new Input()
                {
                    Input1 = 1,
                    Input2 = 0,
                    SampleSize = 1 //when is 0, it returns []
                },
                Pagination = new Pagination()
                {
                    Next = 1
                }
            };

            //Act
            var result = _controller.GetItemsKnown(model) as JsonResult;

            var jsonResult = JsonConvert.SerializeObject(result.Value);

            var objectResult = JsonConvert.DeserializeObject<CalculateResponse>(jsonResult);

            Console.WriteLine(objectResult);

            //Assert
            Assert.IsAssignableFrom<JsonResult>(result);
            Assert.NotNull(jsonResult);
            Assert.NotNull(objectResult.Error);
        }
    }
}