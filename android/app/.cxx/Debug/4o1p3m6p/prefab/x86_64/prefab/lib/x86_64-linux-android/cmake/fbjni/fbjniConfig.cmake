if(NOT TARGET fbjni::fbjni)
add_library(fbjni::fbjni SHARED IMPORTED)
set_target_properties(fbjni::fbjni PROPERTIES
    IMPORTED_LOCATION "/Users/carbs/.gradle/caches/transforms-3/8b6cc7607ffe5936bd42bb311e7e5848/transformed/jetified-fbjni-0.3.0/prefab/modules/fbjni/libs/android.x86_64/libfbjni.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/carbs/.gradle/caches/transforms-3/8b6cc7607ffe5936bd42bb311e7e5848/transformed/jetified-fbjni-0.3.0/prefab/modules/fbjni/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

