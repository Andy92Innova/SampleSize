using SampleSizeApi.Models.DTO;

namespace SampleSizeApi.Service.Interface
{
    public interface ICalculateService
    {
        List<ItemKnown> GetItemsKnown(Input model);
    }
}
