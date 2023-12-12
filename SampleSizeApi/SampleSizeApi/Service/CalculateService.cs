using Microsoft.AspNetCore.Components.Forms;
using SampleSizeApi.Models.DTO;
using System.ComponentModel;
using System.Reflection;

namespace SampleSizeApi.Service
{
    public class CalculateService : ICalculateService
    {
        public List<ItemKnown> GetItemsKnown(Input model)
        {
            var knownList = new List<ItemKnown>();
            try
            {
                for (int i = 0; i < model.SampleSize; i++)
                {
                    var item = new ItemKnown()
                    {
                        Index = i
                    };

                    if (i % model.Input1 == 0 && i % model.Input2 == 0)
                    {
                        item.Result = "I don't know";
                    }
                    else if (i % model.Input1 == 0)
                    {
                        item.Result = "Yes";
                    }
                    else if (i % model.Input2 == 0)
                    {
                        item.Result = "No";
                    }
                    else
                    {
                        item.Result = "N/A";
                    }

                    knownList.Add(item);
                }
            }
            catch (DivideByZeroException ex) {
                throw ex;
            }

            return knownList;
        }

    }
}
