using SampleSizeApi.Models.DTO;

namespace SampleSizeApi.Service.Interface
{
    public interface IPaginationService<T> where T : class
    {
        List<T> GetCurrentPage(List<T> list, Pagination pageControl);
    }
}
