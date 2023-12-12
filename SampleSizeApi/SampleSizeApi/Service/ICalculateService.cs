using SampleSizeApi.Models.DTO;

namespace SampleSizeApi.Service
{
    public interface ICalculateService
    {
        List<ItemKnown> GetItemsKnown(Input model);
    }
}
