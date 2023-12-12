using SampleSizeApi.Models.DTO;

namespace SampleSizeApi.Service
{
    public interface IPagination<T> where T : class
    {
        List<T> GetCurrentPage(List<T> list, Pagination pageControl);
    }
}
