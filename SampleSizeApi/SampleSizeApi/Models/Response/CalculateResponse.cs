using SampleSizeApi.Models.DTO;

namespace SampleSizeApi.Models.Response
{
    public class CalculateResponse
    {
        public List<ItemKnown>? Items { get; set; }
        public Pagination Pagination { get; set; }
        public string? Error { get; set; }
    }
}
