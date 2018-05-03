using MateTricks.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MateTricks.DTOs;
using MateTricks.Helpers;

namespace MateTricks.Data
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserBriefDTO>().ForMember(q => q.PhotoUrl, opt => {
                opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsProfilePic).Url);
            }).ForMember(dest => dest.Age, opt => {
                opt.ResolveUsing(d => d.BirthDate.CalculateAge());
            });
            CreateMap<User, UserDetailedDTO>().ForMember(dest => dest.PhotoUrl, opt => {
                opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsProfilePic).Url);
            }).ForMember(dest => dest.Age, opt => {
                opt.ResolveUsing(d => d.BirthDate.CalculateAge());
            });
            CreateMap<Photo, PhotosDTO>();
            CreateMap<RegisterUserDTO, User>();
            CreateMap<UpdateUserDTO, User>();
            CreateMap<Photo, PhotoReturnedDTO>();
            CreateMap<AddPhotoDTO, Photo>();
        }
    }
    }