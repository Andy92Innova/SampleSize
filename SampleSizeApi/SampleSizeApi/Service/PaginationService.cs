﻿using SampleSizeApi.Models.DTO;
using SampleSizeApi.Models.Response;
using SampleSizeApi.Service.Interface;

namespace SampleSizeApi.Service
{
    public class PaginationService<T> : IPaginationService<T> where T : class
    {
        List<T> IPaginationService<T>.GetCurrentPage(List<T> list, Pagination pageControl)
        {
            int itemsByPage = 10;
            int total = list.Count;

            if (total < itemsByPage) {
                pageControl.TotalPages = 1;
                return list;
            }

            var blocks = new Dictionary<int, List<T>>();

            int itemsByBlock = 0;
            int itemsStored = 0;
            int indexBlock = 0;
            int totalPages = (total % itemsByPage) == 0 ? total/itemsByPage : (total/itemsByPage) +1;

            var block = new List<T>();
            for (int i = 0; i < total; i++)
            {
                itemsStored++;

                if (itemsByBlock < itemsByPage)
                {
                    block.Add(list[i]);
                    itemsByBlock++;
                }

                if (itemsByBlock == itemsByPage || itemsStored == total)
                {
                    blocks.Add(indexBlock, block);
                    indexBlock++;

                    block = new List<T>();
                    itemsByBlock = 0;
                }
            }
            int currentPage = pageControl.Next == 0 ? 0 : pageControl.Next - 1;

            pageControl.TotalPages = totalPages;
            pageControl.Previous = pageControl.Page;
            pageControl.Page = pageControl.Next;
            pageControl.Next = 0;

            return blocks[currentPage];
        }
    }
}
