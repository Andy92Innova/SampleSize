namespace SampleSizeApi.Models.DTO
{
    public class Pagination
    {
        public int TotalPages { get; set; } //total pages
        public int Page { get; set; } //Current page
        public int Previous { get; set; } //previous page
        public int Next { get; set; } //Next Page
    }
}
