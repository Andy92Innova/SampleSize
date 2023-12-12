using SampleSizeApi.Models.DTO;

namespace SampleSizeApi.Models.Request
{
    public class CalculateRequest
    {
        public Input InputRequest { get; set; }
        public Pagination Pagination { get; set; } = new Pagination() { Page = 1, Next = 1 };
    }
}
